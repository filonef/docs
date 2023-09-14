import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Filonef Docs</span>,
  project: {
    link: 'https://github.com/fionef/docs',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/filonef/docs',
  footer: {
    text: 'Filonef Docs',
  },
  head: ()=> {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.filonef.id' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Filonef Docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Find user guides, code samples, SDKs & toolkits, tutorials, API & CLI references, and more.'}
        />
      </>
    )
  }
}

export default config
