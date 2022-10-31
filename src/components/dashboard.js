function Dashboard({userfirstName}){
    return(
        <div className="Dashboard">
            <div className="dashboard_Header">
                <p className="greeting">Bonjour <span className="secondary-color">{userfirstName?.data?.userInfos?.firstName}</span></p>
                <p className="congratulation">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        </div>
    )
}

export default Dashboard