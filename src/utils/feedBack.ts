import { ElMessage, ElMessageBox } from 'element-plus'

export const lywMessage: any = (
    message: string,
    type: 'success' | 'warning' | 'info' | 'error' = 'info',
    plain=false,
    showClose= false,
    center= false,
  ) => {
    ElMessage({
        message,
        type,
        plain,
        showClose,
        center
      })
  }

export const lywConfirm: any = (
    content: string,
    title: string,
    callback1: any,
    callback2: any,
    confirmButtonText = '确定',
    cancelButtonText = '取消'
  ) => {
    ElMessageBox.confirm(
      content,
      title,
      {
        confirmButtonText,
        cancelButtonText,
        type: 'warning',
      }
    )
      .then(() => {
        callback1 && callback1()
      })
      .catch(() => {
        callback2 && callback2()
      })
  }