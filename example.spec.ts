it('example', () => {
  const { wrapper } = connectedWrapper({ test: '123' });

  const { result } = renderHook(() => useExampleHook(), { wrapper });
  expect(result.current).toEqual('123');
});