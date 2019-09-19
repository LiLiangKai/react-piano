export function sleep ( delay = 80 ) {
  return new Promise( r =>
    setTimeout( () => {
      r();
    }, delay )
  );
}