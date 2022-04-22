import React from "react";

export default class Footer extends React.Component {

    render() {
        return(
            <footer className="bg-dark text-center text-white mt-4">
                
                <div className="container p-4 pb-0">
                        
                    <div className="mb-4">
                        <h5>Ricettario</h5>
                        <p>Sviluppato con React</p>    
                    </div>
                    <hr />
                </div>
                

               
                <div className="text-center p-3">
                    &copy; 2022 Progetto Finale Epicode - corso Full Stack - Adele Macheda
                </div>
               
            </footer>

        )
    }
}