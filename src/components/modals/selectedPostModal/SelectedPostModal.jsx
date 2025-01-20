import styles from './SelectedPostModal.module.css';
import {setMultipleClassNames} from "../../../utils/functions";

const SelectedPostModal = (props) => {
    let modalClassNames = setMultipleClassNames(
        'modal', props.selectedPostData ? 'open' : ''
    );

    return (
        <div className={modalClassNames}
             onClick={(eventObject) => {
                 if(eventObject.currentTarget === eventObject.target) {props.setSelectedPostData(null)}
             }}
        >
            <div className={'modalWindow'}>
                <h1 className={styles.inModalTitle}>{props.selectedPostData?.title}</h1>
                <img className={styles.inModalImage} srcSet={`${props.selectedPostData?.img} 1x, ${props.selectedPostData?.img_2x} 2x`} alt=""/>
                <p className={styles.inModalText}>{props.selectedPostData?.text}</p>
            </div>
        </div>
    );
}

export default SelectedPostModal;