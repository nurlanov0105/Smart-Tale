import {AppProps} from "next/app";
import {Provider, SubscribeProvider, TypeComponentOrganizationFields} from "@/views/providers";

export default function App({Component, pageProps}: AppProps & TypeComponentOrganizationFields){
    return (
        <Provider>
            <SubscribeProvider Component={{isOnlyOwner: Component.isOnlyOwner}}>
                <Component {...pageProps} />
            </SubscribeProvider>
        </Provider>
    )
}
