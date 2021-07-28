
function buildResponse(status: number, data?: any){
  return {
    timestamp: +new Date,
    status,
    data
  }
}

export function ok(data?: any){
  return buildResponse(200, data);
}

export function notFound(){
  return buildResponse(404);
}

export function badRequest(data?: any){
  return buildResponse(400, data);
}