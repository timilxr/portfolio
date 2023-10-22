import Image from "next/image";
import logo from '../public/AlluviumLogo.png';
import styles from '../styles/payroll.module.scss';

const PayRollView = () => {
    return (
        <>
            <div className={`container-fluid ${styles.main}`}>
                <div className={`d-flex justify-content-center ${styles.space_down}`}>
                    <Image src={logo} alt="alluvium logo" />
                </div>
                <h1 className={`text-center ${styles.space_down}`}>Payslip for the month of June, 2020</h1>
                <div className={`container-fluid ${styles.space_down} mx-auto p-0`}>
                    <h2 className={`mb-3 ms-4`}>EMPLOYEE’S DETAILS</h2>
                    <div className={`container-fluid mx-auto row ${styles.space_down}`}>
                        <div className="col-6 row">
                            <div className="col-7">Employee’s Name</div>
                            <div className="col-5 d-flex align-items-center"><span className="me-2">:</span>Oluwatobi Aremu</div>
                            <div className="col-7">Job Title</div>
                            <div className="col-5"><span className="me-2">:</span>UI/UX Designer</div>
                            <div className="col-7">Date of Payment</div>
                            <div className="col-5"><span className="me-2">:</span>21-09-2014</div>
                        </div>
                        <div className="col-6 row">
                            <div className="col-7">Employee’s ID Number</div>
                            <div className="col-5"><span className="me-2">:</span>IS-28-2021</div>
                            <div className="col-7">Bank Name</div>
                            <div className="col-5"><span className="me-2">:</span>GT Bank</div>
                            <div className="col-7">Account Number</div>
                            <div className="col-5"><span className="me-2">:</span>0125155202</div>
                        </div>
                    </div>
                    <div className={`container-fluid mx-auto row text-center ${styles.bg_blueish} py-3 mt-5`}>
                        <div className="col-6">EARNINGS</div>
                        <div className="col-6">DEDUCTIONS</div>
                    </div>
                    <div className={`container-fluid mx-auto p-0 row ${styles.space_down}`}>
                        <div className={`col-6 row ${styles.border_right} py-5 px-0 m-0`}>
                            <div className="col-7">Basic Salary</div>
                            <div className="col-5 text-center">85,000</div>
                            <div className="col-7">Bonus</div>
                            <div className="col-5 text-center">85,000</div>
                            <div className="col-7">Fuel Subsidy</div>
                            <div className="col-5 text-center">85,000</div>
                        </div>
                        <div className={`col-6 row ${styles.border_left} py-5 px-0 m-0`}>
                            <div className="col-7">Total Owed</div>
                            <div className="col-5 text-center">85,000</div>
                            <div className="col-7">Paid So Far</div>
                            <div className="col-5 text-center">85,000</div>
                            <div className="col-7">Balance</div>
                            <div className="col-5 text-center">85,000</div>
                            <div className="col-7">Pay</div>
                            <div className="col-5 text-center">85,000</div>
                        </div>
                    </div>
                    <div className={`container-fluid mx-auto row fw-bold p-3 mt-5 ${styles.space_down}`}>
                        <div className="col-6 row">
                            <div className="col-7">Gross Payment</div>
                            <div className="col-5 text-center">85,000</div>
                        </div>
                        <div className="col-6 row">
                            <div className="col-7">Net Salary</div>
                            <div className="col-5 text-center">85,000</div>
                        </div>
                    </div>
                    <div className={`container-fluid mx-auto row fw-bold p-3 mt-5 ${styles.space_down}`}>
                        <div className="col-4">
                            <div>Gross Payment</div>
                        </div>
                        <div className="col-8 row">
                            <div className="col-1">:</div>
                            <div className="col-11 border-bottom">Eigthy Five Thousand</div>
                        </div>
                    </div>
                </div>
                <div className={`container-fluid mx-auto ${styles.space_down} mx-auto d-flex`}>
                    <button className={`btn ${styles.button} me-3`}>Download</button>
                    <button className={`btn ${styles.button_outline}`}>Print</button>
                </div>
            </div>
        </>
    )
}

export default PayRollView;