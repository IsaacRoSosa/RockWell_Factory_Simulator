import React from 'react'
import styles from '@/styles/UserGView.module.css'

const UserGeneralView = () => {
    return (
        <div className={styles.section1}>
      <div className={styles.companyInfo}>
        <img src="/cocacola-logo.jpeg" alt="Coca Cola Logo" className={styles.logo} />
        <div>
          <p>Company: Coca Cola</p>
          <p>Start Date: 29 Febrero 2024</p>
          <p>Location: Monterrey - Mexico</p>
          <p>Target industry: Food and Beverages</p>
        </div>
      </div>
      <div className={styles.recommendedProducts}>
        <h2>Recommended Products</h2>
        <div className={styles.product}>
          <img src="/emulate3d-logo.png" alt="Emulate 3D" className={styles.productLogo} />
          <p>
            Emulate3D Ultimate technology is designed to save time for companies that want to produce
            high-quality models of their automation solutions, perform accurate analysis of their
            operation, and create robust control tests for their systems in operation. It is used for
            design planning and for virtual commissioning, with the possibility of simulation and
            emulation in the same software.
          </p>
        </div>
      </div>
      <div className={styles.leaderboard}>
        <h2>LEADERBOARD</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Minigame</th>
              <th>Points</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>@Coca Cola</td>
              <td>Foods Industry</td>
              <td>9821</td>
              <td><div className={styles.rating}></div></td>
            </tr>
            <tr>
              <td>@Nestle</td>
              <td>Foods Industry</td>
              <td>9632</td>
              <td><div className={styles.rating}></div></td>
            </tr>
            <tr>
              <td>@PepsiCo</td>
              <td>Foods Industry</td>
              <td>8732</td>
              <td><div className={styles.rating}></div></td>
            </tr>
            <tr>
              <td>@Microsoft</td>
              <td>Foods Industry</td>
              <td>8643</td>
              <td><div className={styles.rating}></div></td>
            </tr>
            <tr>
              <td>@Ford</td>
              <td>Automotive Industry</td>
              <td>7231</td>
              <td><div className={styles.rating}></div></td>
            </tr>
            <tr>
              <td>@Toyota</td>
              <td>Automotive Industry</td>
              <td>9231</td>
              <td><div className={styles.rating}></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default UserGeneralView