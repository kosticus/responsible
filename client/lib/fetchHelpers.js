export const headers = {
  'Content-Type': 'application/json',
};

export function json(response) {
  return response.json();
}

export function checkStatus(response) {
  // We use status 418 as a response to requests we handle but in a round-about way.
  if (response.status === 418 || (response.status >= 200 && response.status < 300)) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
