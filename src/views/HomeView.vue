<template>
  <div class="wrapper">
    <div class="types column">
      <div class="card">
        <img src="" alt="test">
        URL
      </div>
      <div class="card">
        URL
      </div>
      <div class="card">
        URL
      </div>
      <div class="card">
        URL
      </div>
      <div class="card">
        URL
      </div>

      <div class="card">
        <RouterLink to="/content">Go to Content</RouterLink>
      </div>
    </div>

    <div class="column">
      Image
    </div>
  </div>

</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 15px auto;
  padding: 25px;
  box-sizing: border-box;

  gap: 10px;

  .column {
    height: 100%;
    min-width: 300px;
    flex: 1;

    box-sizing: border-box;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .types {
    min-width: none;
    flex: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));

    align-content: start;

    gap: 10px;

    overflow-y: auto;

    .card {
      background-color: $card-background;
      background: $card-background-gradient;
      border: $card-border;
      border-radius: 8px;

      height: fit-content;
      padding: 1rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

  }
}
</style>
