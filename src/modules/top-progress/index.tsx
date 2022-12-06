import Router from "next/router"
import NProgress from "nprogress"
import React from "react"

let timer: NodeJS.Timeout | null
let state: string
let activeRequests = 0
const delay = 250

function load() {
  if (state === "loading") {
    return
  }

  state = "loading"

  timer = setTimeout(function () {
    NProgress.start()
  }, delay) // only show progress bar if it takes longer than the delay
}

function stop() {
  if (activeRequests > 0) {
    return
  }

  state = "stop"
  if (timer) {
    clearTimeout(timer)
  }

  NProgress.done()
}

Router.events.on("routeChangeStart", load)
Router.events.on("routeChangeComplete", stop)
Router.events.on("routeChangeError", stop)

const originalFetch = window.fetch
window.fetch = async function (...args) {
  if (activeRequests === 0) {
    load()
  }

  activeRequests++

  try {
    const response = await originalFetch(...args)
    return response
  } catch (error) {
    return Promise.reject(error)
  } finally {
    activeRequests -= 1
    if (activeRequests === 0) {
      stop()
    }
  }
}

const TopProgress: React.FC = () => {
  return <div className="h-2"></div>
}

export default TopProgress
