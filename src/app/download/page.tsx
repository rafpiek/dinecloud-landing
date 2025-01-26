import Image from "next/image";
import qr from "@/assets/images/landing/qr.svg";
import Link from "next/link";
export default function DownloadPage() {
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
                    <Image className="qr" width={100} height={100} src={qr} alt="" />
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
