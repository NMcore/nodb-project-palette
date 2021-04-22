import React from 'react'

export default function Template(props) {
  return (
    <footer>
      <div className="wrapper">
        <div className="sidebar template-col-default mr-2" style={{ backgroundColor: props.templateColor[2] }} data-active-color="danger">
          <div className="logo">
            <a href="/" className="simple-text logo-mini">
              <div className="logo-image-small">
                <img alt="Bill and Ted" src="../assets/img/logo-small.png" />
              </div>
            </a>
            <a href="/" className="simple-text logo-normal" style={{ color: props.templateTextColor[0] }}>
              Ted Logan
            </a>
          </div>
          <div className="sidebar-wrapper" style={{ backgroundColor: props.templateColor[2] }}>
            <ul className="nav">
              <li className="active">
                <a href="./dashboard.html">
                  <i className="nc-icon nc-bank" style={{ color: props.templateColor[3] }}></i>
                  <p style={{ color: props.templateColor[3] }}>Dashboard</p>
                </a>
              </li>
              <li>
                <a href="./icons.html">
                  <i style={{ color: props.templateTextColor[0] }} className="nc-icon nc-diamond"></i>
                  <p style={{ color: props.templateTextColor[0] }}>Icons</p>
                </a>
              </li>
              <li>
                <a href="./map.html">
                  <i style={{ color: props.templateTextColor[0] }} className="nc-icon nc-pin-3"></i>
                  <p style={{ color: props.templateTextColor[0] }}>Where am I?</p>
                </a>
              </li>
              <li>
                <a href="./notifications.html">
                  <i style={{ color: props.templateTextColor[0] }} className="nc-icon nc-bell-55"></i>
                  <p style={{ color: props.templateTextColor[0] }}>Notifications</p>
                </a>
              </li>
              <li>
                <a href="./user.html">
                  <i style={{ color: props.templateTextColor[0] }} className="nc-icon nc-single-02"></i>
                  <p style={{ color: props.templateTextColor[0] }}>User Profile</p>
                </a>
              </li>
              <li>
                <a href="./tables.html">
                  <i style={{ color: props.templateTextColor[0] }} className="nc-icon nc-tile-56"></i>
                  <p style={{ color: props.templateTextColor[0] }}>Complicated things</p>
                </a>
              </li>
              <li>
                <a href="./typography.html">
                  <i style={{ color: props.templateTextColor[0] }} className="nc-icon nc-caps-small"></i>
                  <p style={{ color: props.templateTextColor[0] }}>Words</p>
                </a>
              </li>
              <li className="active-pro">
                <a href="./upgrade.html">
                  <i style={{ color: props.templateTextColor[0] }} className="nc-icon nc-spaceship"></i>
                  <p style={{ color: props.templateTextColor[0] }}>Rockets are great</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel" style={{ backgroundColor: props.templateColor[0] }}>
          <nav style={{ backgroundColor: props.templateColor[1] }} className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent-template">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <div className="navbar-toggle">
                  <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <a className="navbar-brand" style={{ color: props.templateTextColor[0] }} href="/">Strange Things At The Circle K - Dashboard</a>
              </div>
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
              </button> */}
              <div className="collapse navbar-collapse justify-content-end" id="navigation">

                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link btn-magnify" href="/">
                      <i style={{ color: props.templateTextColor[0] }} className="nc-icon nc-layout-11"></i>
                      <p>
                        <span className="d-lg-none d-md-block">Stats</span>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item btn-rotate dropdown">
                    <a style={{ color: props.templateTextColor[0] }} className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink"
                      data-toggle="dropdown">
                      <i style={{ color: props.templateTextColor[0] }} className="nc-icon nc-bell-55"></i>
                      <p>
                        <span className="d-lg-none d-md-block">Some Actions</span>
                      </p>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="/">Action</a>
                      <a className="dropdown-item" href="/">Another action</a>
                      <a className="dropdown-item" href="/">Something else here</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link btn-rotate" href="/">
                      <i style={{ color: props.templateTextColor[0] }} className="nc-icon nc-settings-gear-65"></i>
                      <p>
                        <span className="d-lg-none d-md-block">Account</span>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="content">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5 col-md-4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-atom text-warning"></i>
                        </div>
                      </div>
                      <div className="col-7 col-md-8">
                        <div className="numbers">
                          <p className="card-category">React Level</p>
                          <p className="card-title">Padawan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer ">
                    <hr />
                    <div className="stats">
                      <i className="fa fa-refresh"></i>
                      Update Now
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5 col-md-4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-money-coins text-success"></i>
                        </div>
                      </div>
                      <div className="col-7 col-md-8">
                        <div className="numbers">
                          <p className="card-category">Team Revenue</p>
                          <p className="card-title">$0,005</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer ">
                    <hr />
                    <div className="stats">
                      <i className="fa fa-calendar-o"></i>
                      Last day
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5 col-md-4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-ambulance text-danger"></i>
                        </div>
                      </div>
                      <div className="col-7 col-md-8">
                        <div className="numbers">
                          <p className="card-category">Scott's Tots bugs</p>
                          <p className="card-title">232</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer ">
                    <hr />
                    <div className="stats">
                      <i className="fa fa-clock-o"></i>
                      In the last hour
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5 col-md-4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-favourite-28 " style={{ color: props.templateColor[4] }}></i>
                        </div>
                      </div>
                      <div className="col-7 col-md-8">
                        <div className="numbers">
                          <p className="card-category">Circle K Commits</p>
                          <p className="card-title">+107</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer ">
                    <hr />
                    <div className="stats">
                      <i className="fa fa-refresh"></i>
                      Update now
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header ">
                    <h5 className="card-title">Fancy Charts</h5>
                    <p className="card-category">24 Hours performance</p>
                  </div>
                  <div className="card-body ">
                    <canvas id="chartHours" width="400" height="100" ></canvas>
                  </div>
                  <div className="card-footer ">
                    <hr />
                    <div className="stats">
                      <i className="fa fa-history"></i> Updated 3 minutes ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card ">
                  <div className="card-header ">
                    <h5 className="card-title">Executives love dashboards</h5>
                    <p className="card-category">Most are useless like this:</p>
                  </div>
                  <div className="card-body ">
                    <canvas id="chartEmail"></canvas>
                  </div>
                  <div className="card-footer ">
                    <div className="legend">
                      <i className="fa fa-circle text-primary"></i> Opened
                      <i className="fa fa-circle text-warning"></i> Read
                      <i className="fa fa-circle text-danger"></i> Deleted
                      <i className="fa fa-circle text-gray"></i> Unopened
                    </div>
                    <hr />
                    <div className="stats">
                      <i className="fa fa-calendar"></i> Number of emails sent
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card card-chart">
                  <div className="card-header">
                    <h5 className="card-title">Friends that won't stop talking about Bitcoin:</h5>
                    <p className="card-category">Line Chart of annoyance:</p>
                  </div>
                  <div className="card-body">
                    <canvas id="speedChart" width="400" height="100"></canvas>
                  </div>
                  <div className="card-footer">
                    <div className="chart-legend">
                      <i className="fa fa-circle text-info"></i> Justin
                      <i className="fa fa-circle text-warning"></i> Richard
                    </div>
                    <hr />
                    <div className="card-stats">
                      <i className="fa fa-check"></i> Certified annyoing friends
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer footer-black  footer-white ">
            <div className="container-fluid">
              <div className="row">
                <nav className="footer-nav">
                  <ul>
                    <li><a href="/" target="_blank">WRPT 2</a></li>
                    <li><a href="/" target="_blank">Discord</a></li>
                    <li><a href="/" target="_blank">MDN</a></li>
                  </ul>
                </nav>
                <div className="credits ml-auto">
                  <span className="copyright">
                    2021, made with <i className="fa fa-heart heart"></i> by lines of code.
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </footer>
  )
}
