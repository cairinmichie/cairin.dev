import React from 'react'
import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'

export default function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props
  return <Component {...pageProps} />
}
