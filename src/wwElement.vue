<template>
  <div class="liquid-button-container">
    <button 
      class="liquid-button"
      :class="{ 'active': isActive }"
      @click="handleClick"
      :style="buttonStyles"
    >
      <!-- Liquid background animation -->
      <div class="liquid-bg">
        <svg viewBox="0 0 200 60" class="liquid-svg">
          <defs>
            <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" :style="`stop-color:${gradientStart};stop-opacity:1`" />
              <stop offset="100%" :style="`stop-color:${gradientEnd};stop-opacity:1`" />
            </linearGradient>
          </defs>
          <path 
            :d="liquidPath" 
            fill="url(#liquidGradient)"
            class="liquid-path"
          />
        </svg>
      </div>
      
      <!-- Button content -->
      <div class="button-content">
        <div class="streak-icon" v-if="content.showIcon">
          🔥
        </div>
        <div class="streak-info">
          <span class="streak-number">{{ content.streakCount }}</span>
          <span class="streak-label">{{ content.streakLabel }}</span>
        </div>
      </div>
      
      <!-- Ripple effect -->
      <div class="ripple" :class="{ 'animate': rippleActive }"></div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LiquidStreakButton',
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
    wwElementState: { type: Object, required: true }
  },
  emits: ['trigger-event'],
  data() {
    return {
      isActive: false,
      rippleActive: false,
      animationFrame: null,
      time: 0
    }
  },
  computed: {
    buttonStyles() {
      return {
        '--primary-color': this.content.primaryColor || '#ff6b6b',
        '--secondary-color': this.content.secondaryColor || '#ff8e8e',
        '--text-color': this.content.textColor || '#ffffff',
        '--button-width': this.content.buttonWidth || '200px',
        '--button-height': this.content.buttonHeight || '60px',
        '--animation-speed': `${this.content.animationSpeed || 3}s`
      }
    },
    gradientStart() {
      return this.content.primaryColor || '#ff6b6b'
    },
    gradientEnd() {
      return this.content.secondaryColor || '#ff8e8e'
    },
    liquidPath() {
      const amplitude = 8
      const frequency = 0.02
      const phase = this.time * 0.01
      
      let path = 'M0,30'
      
      for (let x = 0; x <= 200; x += 2) {
        const y = 30 + Math.sin(x * frequency + phase) * amplitude
        path += ` L${x},${y}`
      }
      
      path += ' L200,60 L0,60 Z'
      return path
    }
  },
  mounted() {
    this.startAnimation()
  },
  beforeUnmount() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame)
    }
  },
  methods: {
    startAnimation() {
      const animate = () => {
        this.time += (this.content.animationSpeed || 3)
        this.animationFrame = requestAnimationFrame(animate)
      }
      animate()
    },
    handleClick() {
      this.isActive = true
      this.rippleActive = true
      
      // Emit WeWeb trigger event
      this.$emit('trigger-event', {
        name: 'click',
        event: {
          streakCount: this.content.streakCount || 0,
          timestamp: new Date().toISOString()
        }
      })
      
      // Reset active state
      setTimeout(() => {
        this.isActive = false
      }, 200)
      
      // Reset ripple
      setTimeout(() => {
        this.rippleActive = false
      }, 600)
    }
  }
}
</script>

<style scoped>
.liquid-button-container {
  display: inline-block;
  position: relative;
}

.liquid-button {
  position: relative;
  width: var(--button-width);
  height: var(--button-height);
  border: none;
  border-radius: 30px;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.liquid-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.liquid-button.active {
  transform: translateY(0) scale(0.98);
}

.liquid-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
}

.liquid-svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.liquid-path {
  animation: liquidFlow var(--animation-speed) ease-in-out infinite;
}

.button-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100%;
  color: var(--text-color);
  font-weight: 600;
}

.streak-icon {
  font-size: 20px;
  animation: bounce 2s ease-in-out infinite;
}

.streak-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
}

.streak-number {
  font-size: 18px;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.streak-label {
  font-size: 11px;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.ripple.animate {
  animation: rippleEffect 0.6s ease-out;
}

@keyframes liquidFlow {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(-2px);
  }
}

@keyframes rippleEffect {
  to {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}

/* Responsive design */
@media (max-width: 480px) {
  .liquid-button {
    width: calc(var(--button-width) * 0.9);
    height: calc(var(--button-height) * 0.9);
  }
  
  .streak-number {
    font-size: 16px;
  }
  
  .streak-label {
    font-size: 10px;
  }
  
  .streak-icon {
    font-size: 18px;
  }
}
</style>