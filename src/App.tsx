import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'

import AppRouter from './AppRouter'
import { client } from './bootstrap/apollo'
import { defaultTheme } from './theme/defaultTheme'
import { GlobalStyle } from './theme/GlobalStyle'
import messages_pl from './translations/pl.json'
import messages_en from './translations/en.json'

if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/dist/locale-data/pl');
    require('@formatjs/intl-pluralrules/dist/locale-data/en');
}

interface TranslatedText {
    [key: string]: string
}

const messages: { [key: string]: TranslatedText } = {
    pl: messages_pl,
    en: messages_en
};

export default (): JSX.Element => {
    const language = navigator.language.split(/[-_]/)[0];

    return (
        <IntlProvider locale={language} messages={messages[language]}>
            <ApolloProvider client={client}>
                <ThemeProvider theme={defaultTheme}>
                    <>
                        <GlobalStyle />
                        <AppRouter />
                    </>
                </ThemeProvider>
            </ApolloProvider>
        </IntlProvider>
    )
}
