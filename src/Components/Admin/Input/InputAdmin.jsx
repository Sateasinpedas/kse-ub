export default function InputAdmin({ placeholder, type, onChange, defaultValue, className, beginningIcon, showPassword, setShowPassword, required }) {
    return (
        <div className="flex items-stretch relative">
            <div className="bg-purple-extralight p-3 absolute">
                {beginningIcon}
            </div>
            <input placeholder={placeholder} type={ showPassword ? 'text' : type} onChange={onChange} defaultValue={defaultValue} className={` text-sm bg-white rounded outline-none ring-0 focus:ring-2 focus:ring-purple transition duration-300 pl-14 ${ type === 'password' ? 'pr-24' : 'pr-2' } h-12 border border-purple ` + className} required={required}/>
            { type === 'password' && <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-purple absolute right-5 top-[10px]">Show</button>}
        </div>
    );
}