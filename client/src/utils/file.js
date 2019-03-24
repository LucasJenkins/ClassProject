export const getBase64String = file =>
  new Promise((resolve, reject) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => resolve(reader.result.split(',')[1])
    reader.onerror = error => reject(error)
  })
