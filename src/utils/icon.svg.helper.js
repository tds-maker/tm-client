const SVGs = {
  mdCheck: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z',
  mdClose: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
}


const iconSVG = (size= 12) => (color = '#000') => (name) => {
  const style = `style='color:${color};font-size:${size}px'`
  return `<svg xmlns='http://www.w3.org/2000/svg' stroke='currentcolor' fill='currentcolor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' ${style}><path d='${SVGs[name]}'></path></svg>`
  // return `<svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em'><path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'></path></svg>`
}

export default iconSVG;