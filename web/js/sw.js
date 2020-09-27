"use strict";

const version = 1;

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);

main().catch(console.error);

// ****************************************************

async function main() {
  console.log(`Service Worker (${version}) is starting...`);
}

async function onInstall(evt) {
  console.log(`Service Worker (${version}) is installed.`);
  self.skipWaiting();
}

function onActivate(evt) {
  evt.waitUntil(handelActivation());
}

async function handelActivation() {
  await clients.claim();
  console.log(`Service Worker (${version}) is activated.`);
}
