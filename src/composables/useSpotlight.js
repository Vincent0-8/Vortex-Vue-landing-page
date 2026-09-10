import { onMounted, onUnmounted } from 'vue'

/**
 * useSpotlight Composable
 * 
 * Tracks mouse movement across a container of cards to dynamically
 * update CSS custom properties (--mouse-x and --mouse-y).
 * This creates the signature interactive radial glow effect found in top SaaS sites.
 * 
 * @param {import('vue').Ref<HTMLElement | null>} containerRef - Ref pointing to the card group container
 * @param {string} [cardSelector='.spotlight-card'] - CSS selector for individual cards within the container
 */
export function useSpotlight(containerRef, cardSelector = '.spotlight-card') {
  const handleMouseMove = (event) => {
    if (!containerRef.value) return

    const cards = containerRef.value.querySelectorAll(cardSelector)
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    })
  }

  onMounted(() => {
    if (containerRef.value) {
      containerRef.value.addEventListener('mousemove', handleMouseMove)
    }
  })

  onUnmounted(() => {
    if (containerRef.value) {
      containerRef.value.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return {
    handleMouseMove
  }
}
