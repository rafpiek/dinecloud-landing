"use client"
import Image from "next/image"
import Link from "next/link";
import { isAndroid, isIOS, isMacOS } from "@/lib/device";
import { useQRCode } from "next-qrcode";
import { GOOGLE_PLAY_URL, APP_STORE_URL } from "@/lib/constants";
export default function DownloadPage() {
    const { Canvas } = useQRCode();
    let qrCodeUrl = ""
    if (isAndroid()) {
        qrCodeUrl = GOOGLE_PLAY_URL
    } else if (isIOS()) {
        qrCodeUrl = APP_STORE_URL
    } else if (isMacOS()) {
        qrCodeUrl = APP_STORE_URL
    } else {
        qrCodeUrl = GOOGLE_PLAY_URL
    }
  return(
    <section className="standard_section height_100 bg-white">
    <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="flex flex-row">
            <div className="w-full">
                <div className="top">
                    <h1 className="title center">Pobierz aplikację</h1>
                    <p className="body_3 center">Zeskanuj kod QR swoim telefonem aby pobrać aplikację.</p>
                </div>
                <div className="middle">
                    <div className="qr">
                        <Canvas text={qrCodeUrl} options={{ type: "svg", width: 392, }} />
                    </div>
                </div>
                <div className="bottom center">
                    <a className="btn_primary personal" href="./">Gotowe</a>
                </div>
            </div>
        </div>
    </div>
    <Link className="btn_close icon_close" href="/"></Link>
</section>
  )
}
