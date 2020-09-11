<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
    </p>
  </div>
</template>

<style lang="scss">
.about {
  width: 100%;
  height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 500px;
  background-color: #d74e09;
  border-radius: 2px;

  & p {
    font-size: 1.5em;
  }
}
</style>
