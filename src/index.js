export default {
  fetch(request) {
    return new Response("Feeding San Antonio Worker is live!", {
      headers: { "Content-Type": "text/plain" }
    });
  }
};
