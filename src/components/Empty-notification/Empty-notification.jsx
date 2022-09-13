import s from './Empty-notification.module.css';
export default function EmptyNotification() {
    return(
        <p className={s.empty}>Sorry, there are no contacts here. You can add a new one above.</p>
    )
}