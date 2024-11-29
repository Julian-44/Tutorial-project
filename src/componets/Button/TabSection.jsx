import Button from "./Button";

export default function TabSection({ active, onChange}) {
    return (
        <section style={ {marginBottom: '1rem'}}>
            <Button isActive={active === 'main'} onClick={() => onChange('main')}>Main</Button>
            <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>QAF</Button>
        </section>
    )
}