<template>
  <div class="page">
    <div class="container">
      <header id="masthead" class="site-header">
        <div class="site-branding">
          <h1 class="site-title"><NuxtLink to="/">Moschino</NuxtLink></h1>
          <h2 class="site-description">Minimalist Portfolio HTML Template</h2>
        </div>
      </header>

      <Nuxt/>
    </div>

    <footer id="colophon" class="site-footer">
      <div class="container">
        <div class="site-info">
          <h1
            style="font-family: 'Herr Von Muellerhoff';color: #ccc;font-weight:300;text-align: center;margin-bottom:0;margin-top:0;line-height:1.4;font-size: 46px;">
            Moschino</h1>
          <a target="blank" href="https://www.wowthemes.net/">&copy; Moschino - Free HTML Template by
            WowThemes.net</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex-grow: 1;
}

.site-footer {
  flex-shrink: 0;
}
</style>
