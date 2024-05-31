/**
 * File 文件流转为 Base64
 */
export const fileToBase64Url = (file): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      resolve(reader.result)
    }
    reader.onerror = function (error) {
      reject(error)
    }
  })
}

/**
 * Base64 转为 File 文件流
 */
// https://stackoverflow.com/questions/35940290/how-to-convert-base64-string-to-javascript-file-object-like-as-from-file-input-f
export const base64UrlToFile = async (url: string, filename: string, mimeType?: string) => {
  if (url.startsWith('data:')) {
    const arr = url.split(',')
    const mime = arr[0].match(/:(.*?);/)![1]
    const bstr = atob(arr[arr.length - 1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while(n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    const file = new File([u8arr], filename, {
      type: mime || mimeType
    })
    return Promise.resolve(file)
  }

  return fetch(url)
    .then(res => res.arrayBuffer())
    .then(buf => new File([buf], filename, {
      type: mimeType
    }))
}
