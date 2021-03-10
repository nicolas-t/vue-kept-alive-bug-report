<template>
  <div>
    We have 3 kept alive pages <br>
    When a page is deactivated computed properties are still being computed, (and the page component is being rerendered ?)
  </div>
  <br>
  <div>
    steps to reproduce: <br>
    <ul>
      <li>
        Click on Page1 link (page 1 is activated) <br>
      </li>
      <li>
        Click on Page2 link (page 1 is deactivated) <br>
      </li>
      <li>
        Click on Page3 link (page 1 is still deactivated, and routeName computed property is being computed, see console) <br>
      </li>
    </ul>
  </div>
  <div id="nav">
    <router-link to="/Page1">Page1</router-link> |
    <router-link to="/Page2">Page2</router-link> |
    <router-link to="/Page3">Page3</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

</template>