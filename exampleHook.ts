const useExampleHook = () => {
  const test = useSelector(state => state.test)
  return test;
}