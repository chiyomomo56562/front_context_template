# Hook Rules (Implementation Patterns)

이 문서는 React Query를 사용한 서버 상태 관리의 **구체적인 코드 패턴**을 정의합니다. 계층 간 호출 금지 규정 등 상위 정책은 [ARCHITECTURE.md](../ARCHITECTURE.md)를 참조하십시오.

## 1. Query Patterns (Server Data Fetching)

### Query Key Management
- 모든 Query Key는 일관성을 위해 배열 형태를 사용하며, 기능명과 파라미터를 포함합니다.
- 예: `['books', params]`, `['books', 'detail', id]`

### Implementation Example
```ts
export const useBooksQuery = (params: GetBooksParams) => {
  return useQuery({
    queryKey: ['books', params],
    queryFn: async () => {
      const data = await getBooks(params);
      // 필수: ARCHITECTURE.md의 단방향 흐름에 따라 Mapper 사용
      return data.map(mapBook);
    },
  });
};
```

## 2. Mutation Patterns (Data Changes)

### Side Effect Handling
- Mutation 성공 시에는 반드시 관련 Query를 무효화(Invalidation)하여 데이터를 최신화합니다.

### Implementation Example
```ts
export const useCreateBookMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      // 관련 쿼리 키 무효화
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};
```

## 3. Naming Conventions (Airbnb Standard)

- **Hook & File Name**: `camelCase`를 사용하며 `use` 접두사를 붙입니다.
    - Queries: `use{Entity}Query` 또는 `use{Action}Query`
    - Mutations: `use{Action}{Entity}Mutation`
    - 예: `useBookQuery.ts`, `useCreateBookMutation.ts`

## 4. Hook Internal Structure

- Hook 내부에서 복잡한 데이터 가공을 하지 않습니다. 가공이 필요한 경우 `mapper.ts`나 `utils/`를 활용하십시오.
- 여러 API 호출이 필요한 경우 `useQueries` 또는 별도의 `Logic` 훅으로 추상화합니다.
