// Display
export const CanvasDisplay = (
  { doc, id, width, height } = {
    doc: document,
    id: 'canvas',
    width: window.innerWidth,
    height: window.innerHeight,
  },
) => {
  const canvas = doc.getElementById(id);
  const ctx = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  return {
    doc,
    canvas,
    ctx,
    width,
    height,
    id,
  };
};

CanvasDisplay.clearCtx = disp => {
  const newDisplay = disp;
  newDisplay.ctx.clearRect(
    0,
    0,
    newDisplay.canvas.width,
    newDisplay.canvas.height,
  );
  return newDisplay;
};

CanvasDisplay.circle = disp => particle => {
  const { ctx } = disp;
  const { color, position, size } = particle;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(position.x, position.y, size, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
};
