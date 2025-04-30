import { ref, reactive } from 'vue'

export default (arr: any[], clickWidth?: any) => {
  const box = ref<HTMLElement | any>(null)

  let ind = ref<number>()
  const arrRef = reactive<any[]>([])
  const arrWidth = reactive<any[]>([])
  arr.forEach((item: any) => {
    arrRef.push(item.arrRef)
    arrWidth.push(item.setDefaultWidth)
  })

  console.log(arrRef, 'arrRef')

  const startZY = ref()
  const startSX = ref()
  let scrollLeft = 0
  let startX = 0
  let swipeDirection = ref()

  const handleMouseDown = (event: MouseEvent, index: number) => {
    console.log(event, index, '666')
    event.preventDefault()
    event.stopPropagation()

    ind.value = index

    startZY.value = event.clientX
    startSX.value = event.clientY

    startX = event.pageX - box.value.offsetLeft
    scrollLeft = box.value.scrollLeft

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseMove = (event: MouseEvent) => {
    const x = event.pageX - box.value.offsetLeft
    const walk = x - startX
    box.value.scrollLeft = scrollLeft - walk

    const currentX = event.clientX
    const currentY = event.clientY
    const diffX = startZY.value - currentX
    const diffY = startSX.value - currentY
    if (Math.abs(diffX) > Math.abs(diffY)) {
      swipeDirection.value = diffX > 0 ? 'Right' : 'Left'
    }

    let newWidth =
      event.clientX - arrRef[ind.value as number].value.resizeBoxRef?.getBoundingClientRect().left
    let newWidth1 =
      event.clientX - arrRef[ind.value as number].value.resizeBoxRef?.getBoundingClientRect().right

    if (ind.value == 0) {
      if (newWidth < arrWidth[ind.value]) newWidth = arrWidth[ind.value]
      if (newWidth > box.value.offsetWidth * 0.8) newWidth = box.value.offsetWidth * 0.8
      if (arrRef[ind.value as number].value.resizeBoxRef) {
        arrRef[ind.value].value.resizeBoxRef.style.width = `${Math.abs(newWidth)}px`
      }
    } else if (ind.value == 1) {
      if (swipeDirection.value == 'Right') {
        if (Math.abs(newWidth1) > box.value.offsetWidth * 0.8)
          newWidth1 = box.value.offsetWidth * 0.8
        if (arrRef[ind.value as number].value.resizeBoxRef) {
          arrRef[ind.value as number].value.resizeBoxRef.style.width = `${Math.abs(newWidth1)}px`
        }
      } else if (swipeDirection.value == 'Left') {
        if (Math.abs(newWidth1) < arrWidth[ind.value as number])
          newWidth1 = arrWidth[ind.value as number]
        if (arrRef[ind.value as number].value.resizeBoxRef) {
          arrRef[ind.value as number].value.resizeBoxRef.style.width = `${Math.abs(newWidth1)}px`
        }
      }
    }
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  const isResizing = ref(false)
  const resetWidth = () => {
    if (arrRef[ind.value as number].value.resizeBoxRef) {
      setTimeout(() => (isResizing.value = false), 300)
    }
  }

  return {
    handleMouseDown,
    resetWidth,
    isResizing,
    arrRef,
    box,
  }
}
