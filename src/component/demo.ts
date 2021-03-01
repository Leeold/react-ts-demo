async function a(): Promise<void> {
  await setTimeout(() => {
    console.log(111);
  }, 0);
}
