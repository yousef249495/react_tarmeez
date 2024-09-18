export default function Popup({ errorMessage, isVisible }) {
    return isVisible ?
        <div className="popup">
            <h1 className={errorMessage ? 'error' : ''}>{errorMessage || 'The Form Has Been Submited Successfully'}</h1>
        </div>
        : <></>
}