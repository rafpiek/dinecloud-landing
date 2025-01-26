export const Header = () => {
  return(
    <header id="header">
    <div className="container-fluid">
        <div className="row">
            <div className="col-6">
                <a id="logo" href="./"></a>
                <nav id="nav_main" role="navigation">
                    <ul>
                        <li><a className="btn_navbar_secondary" href="#">Pobierz aplikację dla gości</a></li>
                    </ul>
                </nav>
            </div>
            <div className="col-6">
                <div id="nav_right">
                    <span className="small_button">Rozpocznij bezpłatny testy!</span>
                    <a className="btn_navbar_primary disabled_cursor xs" href="#">Skontaktuj się</a>
                    <div id="nav_mobile_button" className="btn_navbar_primary icon no_text"></div>
                </div>
            </div>
        </div>
    </div>
</header>
  )
};

