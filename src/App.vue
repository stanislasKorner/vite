<template>
  <div class="demo-container">
    <h1>Liquid Streak Button</h1>
    
    <div class="demo-section">
      <wwElement 
        :streakCount="7"
        streakLabel="Day Streak"
        @click="handleButtonClick"
      />
    </div>
    
    <div class="click-info" v-if="lastClick">
      <p>Dernière interaction: Streak {{ lastClick.streakCount }} - {{ formatTime(lastClick.timestamp) }}</p>
    </div>
  </div>
</template>

<script>
import wwElement from './wwElement.vue'

export default {
  name: 'App',
  components: {
    wwElement
  },
  data() {
    return {
      lastClick: null
    }
  },
  methods: {
    handleButtonClick(event) {
      this.lastClick = event
    },
    formatTime(timestamp) {
      return new Date(timestamp).toLocaleTimeString()
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.demo-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 60px 20px;
  color: white;
  text-align: center;
}

h1 {
  margin-bottom: 40px;
  font-size: 2em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.demo-section {
  margin-bottom: 30px;
}

.click-info {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  font-size: 0.9em;
}
</style>