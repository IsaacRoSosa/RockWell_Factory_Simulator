import styles from "./usuario.module.css";

const Usuario = () => {
  return (
    <div className={styles.usuario}>
      <img className={styles.menuLateralIcon} alt="" src="/menu-lateral1.svg" />
      <div className={styles.contentAreaWrapper}>
        <div className={styles.contentArea}>
          <div className={styles.contentAreaInner}>
            <div className={styles.userDashboardParent}>
              <b className={styles.userDashboard}>User Dashboard</b>
              <div className={styles.welcomeBack}>Welcome Back :)</div>
            </div>
          </div>
          <div className={styles.userinfo}>
            <div className={styles.userinfoChild} />
            <img
              className={styles.userimgIcon}
              loading="lazy"
              alt=""
              src="/userimg.svg"
            />
            <div className={styles.userinfWrapper}>
              <div className={styles.userinf}>
                <p className={styles.companyCocaCola}>
                  <b className={styles.company}>Company:</b>
                  <span> Coca Cola</span>
                </p>
                <p className={styles.startDate29Febrero2024}>
                  <b className={styles.startDate}>Start Date:</b>
                  <span> 29 Febrero 2024</span>
                </p>
                <p className={styles.locationMonterreyMexi}>
                  <b className={styles.location}>{`Location:     `}</b>
                  <span>Monterrey - Mexico</span>
                </p>
                <p className={styles.targetIndustryFoodAndBev}>
                  <b
                    className={styles.targetIndustry}
                  >{`Target industry:  `}</b>
                  <span className={styles.foodAndBeverages}>
                    Food and Beverages
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.recommendedproducts}>
            <img
              className={styles.recommendedproductsChild}
              alt=""
              src="/rectangle-128.svg"
            />
            <button className={styles.backgroundParent}>
              <div className={styles.background} />
              <b className={styles.title}>Recommended Products</b>
            </button>
            <div className={styles.recommendedproductsInner}>
              <div className={styles.productimgParent}>
                <div className={styles.productimg}>
                  <div className={styles.productimgChild} />
                  <img
                    className={styles.productimgItem}
                    loading="lazy"
                    alt=""
                    src="/rectangle-361@2x.png"
                  />
                </div>
                <div className={styles.titleParent}>
                  <h2 className={styles.title1}>Emulate 3D</h2>
                  <b className={styles.pdescription}>
                    <p className={styles.emulate3dUltimateTechnology}>
                      Emulate3D Ultimate technology is designed to save time for
                      companies that want to produce high-quality models of
                      their automation solutions, perform accurate analysis of
                      their operation, and create robust control tests for their
                      systems in operation. It is used for design planning and
                      for virtual commissioning, with the possibility of
                      simulation and emulation in the same software.
                    </p>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.leaderboardParent}>
        <div className={styles.leaderboard}>
          <div className={styles.header}>
            <div className={styles.background1} />
            <div className={styles.titleWrapper}>
              <h2 className={styles.title2}>LEADERBOARD</h2>
            </div>
            <nav className={styles.frameParent}>
              <div className={styles.labelWrapper}>
                <div className={styles.label}>Username</div>
              </div>
              <div className={styles.labelContainer}>
                <div className={styles.label1}>Minigame</div>
              </div>
              <div className={styles.label2}>Points</div>
              <div className={styles.label3}>Rating</div>
            </nav>
          </div>
          <div className={styles.table}>
            <div className={styles.tableInner}>
              <div className={styles.cocaColaParent}>
                <div className={styles.cocaCola}>
                  <div className={styles.frameGroup}>
                    <div className={styles.cocaColaWrapper}>
                      <b className={styles.cocaCola1}>@Coca Cola</b>
                    </div>
                    <div className={styles.div}>9821</div>
                  </div>
                  <div className={styles.div1}>Foods Inustry</div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameItem} />
                  </div>
                  <img
                    className={styles.cocaColaChild}
                    loading="lazy"
                    alt=""
                    src="/rectangle-346@2x.png"
                  />
                </div>
                <div className={styles.cocaColaGroup}>
                  <div className={styles.cocaCola2}>
                    <div className={styles.frameContainer}>
                      <div className={styles.nestleWrapper}>
                        <b className={styles.nestle}>{`@ Nestle `}</b>
                      </div>
                      <div className={styles.div2}>9632</div>
                    </div>
                    <div className={styles.div3}>Foods Inustry</div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameInner} />
                      <div className={styles.recommendedProductsTab} />
                    </div>
                    <img
                      className={styles.cocaColaItem}
                      loading="lazy"
                      alt=""
                      src="/rectangle-346-1@2x.png"
                    />
                  </div>
                  <div className={styles.cocaColaContainer}>
                    <div className={styles.cocaCola3}>
                      <div className={styles.frameDiv}>
                        <div className={styles.pepsicoWrapper}>
                          <b className={styles.pepsico}>@PepsiCo</b>
                        </div>
                        <div className={styles.div4}>8732</div>
                      </div>
                      <div className={styles.div5}>Foods Inustry</div>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.frameChild1} />
                      </div>
                      <img
                        className={styles.cocaColaInner}
                        loading="lazy"
                        alt=""
                        src="/rectangle-346-2@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.cocaCola4}>
                    <div className={styles.frameParent1}>
                      <div className={styles.microsoftWrapper}>
                        <b className={styles.microsoft}>@Microsoft</b>
                      </div>
                      <div className={styles.div6}>8643</div>
                    </div>
                    <div className={styles.div7}>Foods Inustry</div>
                    <div className={styles.groupDiv}>
                      <div className={styles.frameChild2} />
                      <div className={styles.frameChild3} />
                    </div>
                    <img
                      className={styles.rectangleIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-346-3@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cocaColaFrame}>
              <div className={styles.cocaCola5}>
                <div className={styles.frameParent2}>
                  <div className={styles.fordWrapper}>
                    <b className={styles.ford}>@Ford</b>
                  </div>
                  <div className={styles.div8}>7231</div>
                </div>
                <div className={styles.div9}>Automotive Inustry</div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild4} />
                  <div className={styles.frameChild5} />
                </div>
                <img
                  className={styles.cocaColaChild1}
                  loading="lazy"
                  alt=""
                  src="/rectangle-346-4@2x.png"
                />
              </div>
            </div>
            <div className={styles.toyota}>
              <div className={styles.rectangleParent2}>
                <img
                  className={styles.frameChild6}
                  loading="lazy"
                  alt=""
                  src="/rectangle-346-5@2x.png"
                />
                <div className={styles.toyotaWrapper}>
                  <b className={styles.toyota1}>@Toyota</b>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div10}>Automotive Inustry</div>
              </div>
              <div className={styles.container}>
                <div className={styles.div11}>9231</div>
              </div>
              <div className={styles.toyotaInner}>
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild7} />
                  <div className={styles.frameChild8} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tablaWrapper}>
          <div className={styles.tabla}>
            <div className={styles.minijuegoParent}>
              <b className={styles.minijuego}>Indusrty</b>
              <b className={styles.progreso}>Points</b>
              <b className={styles.minutos}>Total Play time</b>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.foodsWrapper}>
                <div className={styles.foods}>{`Foods `}</div>
              </div>
              <div className={styles.rectangleParent4}>
                <div className={styles.frameChild9} />
                <div className={styles.rsrs} />
              </div>
              <div className={styles.progresoWrapper}>
                <div className={styles.progreso1}>59 minutos</div>
              </div>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.automativeWrapper}>
                <div className={styles.automative}>Automative</div>
              </div>
              <div className={styles.rectangleParent5}>
                <div className={styles.frameChild10} />
                <div className={styles.frameChild11} />
              </div>
              <div className={styles.progresoContainer}>
                <div className={styles.progreso2}>59 minutos</div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.pharmaWrapper}>
                <div className={styles.pharma}>Pharma</div>
              </div>
              <div className={styles.rectangleParent6}>
                <div className={styles.frameChild12} />
                <div className={styles.frameChild13} />
              </div>
              <div className={styles.progresoFrame}>
                <div className={styles.progreso3}>59 minutos</div>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.softwareWrapper}>
                <div className={styles.software}>Software</div>
              </div>
              <div className={styles.rectangleParent7}>
                <div className={styles.frameChild14} />
                <div className={styles.frameChild15} />
              </div>
              <div className={styles.progresoWrapper1}>
                <div className={styles.progreso4}>59 minutos</div>
              </div>
            </div>
            <div className={styles.drPrernaNarang}>
              <div className={styles.entertainment}>Entertainment</div>
              <div className={styles.rectangleParent8}>
                <div className={styles.frameChild16} />
                <div className={styles.pagination} />
              </div>
              <div className={styles.progresoWrapper2}>
                <div className={styles.progreso5}>59 minutos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
