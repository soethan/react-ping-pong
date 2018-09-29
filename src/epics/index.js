export const pingEpic = action$ =>
  action$.ofType('PING')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG' });

export const pongEpic = action$ =>
    action$.ofType('PONG')
      .delay(1000) // Asynchronously wait 1000ms then continue
      .mapTo({ type: 'PING' });
