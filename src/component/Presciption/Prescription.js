import React from 'react';

import PrescriptionFooter from './PrescriptionFooter';
import PrescriptionHeader from './PrescriptionHeader';

const Prescription = () => {

    const showDate = new Date();
    const displayTodaysDate = showDate.getDate()+'/'+(showDate.getMonth()+1) +'/'+showDate.getFullYear();
    
    return ( 
        <div>
            <div className = "row m-0 p-0">
                <div className = "col-md-6 col-lg-6 border shadow mx-auto mt-5">
                    <div className = "row m-3">
                        <div className ="col-12 border-bottom">
                            <PrescriptionHeader></PrescriptionHeader>
                        </div>

                            <div className="col-12 border-bottom p-2 bg-light">
                                <div className="d-flex flex-row justify-content-around">
                                    <div>
                                        Name: <b>Abdur Rahman</b>
                                    </div>
                                    <div>
                                        Age: <b>14</b>
                                    </div>
                                    <div>
                                        Date:<b> {displayTodaysDate}</b>
                                    </div>
                                </div>
                            </div>

                                <div className="col-3 min-vh-100 border-right border-bottom pt-3 ">
                                    <b>Symptoms of Disease</b>
                                    <table className="table table-sm table-borderless border mt-2 p-3 text-left">
                                            <tr >
                                                <td className="text-success"></td>
                                            </tr>
                                    </table>

                                    <label for="disease">
                                            <input
                                                type="text"
                                                className="form-control shadow"
                                                placeholder="Symptoms"
                                            />
                                    </label>
                                </div>

                                <div className="col-9 border-bottom text-left">
                                    <div className="mt-3">
                                        <span className="font-weight-bold h2"><i>R</i></span>
                                        <sub className="h5">x</sub>
                                    </div>
                                    <div className="mt-3">
                                        <label>
                                            <textarea
                                                className="form-control shadow"
                                                placeholder="Doctor's Advised Medicine"
                                            ></textarea>
                                        </label>
                                    </div>
                                </div>
                    </div>
                    <PrescriptionFooter />
                </div>
            </div>
        </div>
    );
};

export default Prescription;