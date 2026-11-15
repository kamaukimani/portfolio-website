function Dark({isDark,onDarkMode}){

    
    return(
        <div>
            {isDark ? (
                <button onClick={onDarkMode}>🌘</button>
            ) :(
                <button onClick={onDarkMode}>🌞</button>
            )}
        </div>
    )
}

export default Dark;