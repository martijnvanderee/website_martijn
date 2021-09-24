import React, { FunctionComponent, useState, useEffect } from 'react'

import { useIsMenuOpen } from '../state/isMenuOpen'
import { useIsSearchMenuOpen } from '../state/isSearchMenuOpen'
//content
import { contentHeader } from "../content"

import * as R from 'ramda'

export const Header = () => {
  const { dispatch, state } = useIsMenuOpen()
  const { dispatchMenu, state: { isSearchMenuOpen } } = useIsSearchMenuOpen()

  const isMenuOpen = state.isMenuOpen
  const menuAction = isMenuOpen ? "close" : "open"
  const SearchmenuAction = isSearchMenuOpen ? "close" : "open"

  return (
    <header className="max-w-6xl mx-auto md:flex md:mb-20">
      <HeaderContent />
      <HeaderImage />
    </header >
  )
}

const HeaderContent = () => {
  const [contentCount, setContentCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {

      const amountOfsubTitles = contentHeader.subtitle2.length - 1

      setContentCount((contentCount) => {
        return contentCount === amountOfsubTitles ? 0 : contentCount + 1
      });
    }, 3500)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-6 mb-6 mt-6 md:mt-20 md:text-left font-mono ">

      {/* title */}
      <h1 className="mb-6 md:mb-12 text-black leading-10 text-3xl md:text-5xl font-bold">{contentHeader.title}</h1>

      <h2 className="mb-6 md:mb-12 text-grey text-lg md:text-xl font-bold">{contentHeader.subtitle1}</h2>

      <Subtitle content={contentHeader.subtitle2[contentCount]} />

      {/* button */}
      <button className="px-4 py-2 mb-6 border-2 border-green text-xl text-green rounded shadow-headerButton hover:shadow-headerButtonHover transition ease-in">{contentHeader.button}</button>
    </div>
  )
}

const Subtitle = ({ content }: any) => <div>
  <div className="inline-block">
    <h2 key={content} className="overflow-hidden border-r-2 whitespace-nowrap mx-auto my-0 tracking-widest inline-block animate-blink text-md sm:text-lg font-medium mb-6 text-grey">{content}</h2>
  </div>
</div>



const blinkingLogic = (condition: number[]) => {

  if (R.equals(condition, [1, 0, 0])) { return [0, 1, 0] }
  else if (R.equals(condition, [0, 1, 0])) { return [0, 0, 1] }
  else { return [1, 0, 0] }
}


const HeaderImage = () => {
  const [contentCount, setContentCount] = useState([0, 1, 0]);
  const colors = ["#ccc", "#38BA99"]

  useEffect(() => {
    const interval = setInterval(() => {
      setContentCount((contentCount) => {

        const newState = blinkingLogic(contentCount)

        return newState
      });
    }, 1000)

    return () => clearInterval(interval);
  }, []);





  return (
    <div className="relative md:mt-40 w-full max-w-2xl mx-auto">
      <HeaderImage1 button1={colors[contentCount[0]]} button2={colors[contentCount[1]]} button3={colors[contentCount[2]]} />
    </div>
  )
}

type HeaderImageProps = {
  button1: string
  button2: string
  button3: string
}

const HeaderImage1: FunctionComponent<HeaderImageProps> = ({ button1, button2, button3 }) =>
  <svg className="w-full h-auto" width="896" height="793.312" viewBox="0 0 896 793.312">
    <defs>
      <filter id="Path_92" x="122" y="3.053" width="744.072" height="790.258" filterUnits="userSpaceOnUse">
        <feOffset dx="60" dy="60" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="30" result="blur" />
        <feFlood flood-color="#38ba99" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="Path_92-2" x="122" y="3.053" width="744.072" height="790.258" filterUnits="userSpaceOnUse">
        <feOffset dx="60" dy="60" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="30" result="blur-2" />
        <feFlood flood-color="#38ba99" result="color" />
        <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
        <feComposite operator="in" in="color" />
        <feComposite operator="in" in2="SourceGraphic" />
      </filter>
    </defs>
    <g data-type="innerShadowGroup">
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_92)">
        <path id="Path_92-3" data-name="Path 92" d="M8010.727-706.98c.463-2.383,0-144.365,0-144.365s.839-38.323,0-42.86c-5.291-28.6-24.8-105.82,11.34-139.948,1.454-1.373,106.466-97.391,108.07-99.017,40.17-40.685,181.127,0,240.591,0,88.833,0,163.54,63.079,187.718,163.971s-23.921,176.987-91.006,239.6-141.4,181.971-277.726,188.211S7990.572-603.376,8010.727-706.98Z" transform="translate(-7848.72 1184.31)" fill="#38ba99" opacity="0.25" />
      </g>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_92-2)">
        <path id="Path_92-4" data-name="Path 92" d="M8010.727-706.98c.463-2.383,0-144.365,0-144.365s.839-38.323,0-42.86c-5.291-28.6-24.8-105.82,11.34-139.948,1.454-1.373,106.466-97.391,108.07-99.017,40.17-40.685,181.127,0,240.591,0,88.833,0,163.54,63.079,187.718,163.971s-23.921,176.987-91.006,239.6-141.4,181.971-277.726,188.211S7990.572-603.376,8010.727-706.98Z" transform="translate(-7848.72 1184.31)" fill="#fff" opacity="0.25" />
      </g>
    </g>
    <g id="Group_44" data-name="Group 44">
      <path id="Path_122" data-name="Path 122" d="M687.468,139.379c7.686,16.355-8.6,20.988-27.255,29.754s-32.616,18.346-40.3,1.991-13.922-48.818,12.47-61.219C659.682,97.077,679.783,123.024,687.468,139.379Z" transform="translate(-171.129 -106.46)" fill="#2f2e41" />
      <circle id="Ellipse_63" data-name="Ellipse 63" cx="25.114" cy="25.114" r="25.114" transform="translate(453.163 14.855)" fill="#ffb8b8" />
      <path id="Path_123" data-name="Path 123" d="M772.252,255.2c-.869-1.135-1.739-2.25-2.618-3.333q-1.7-2.117-3.426-4.1c-13.017-15.021-26.861-24.479-42.107-25.491h-.02l-.225-.02-30.379,29.612L683.15,261.926l.225.552,5.572,13.876h97.64A240.13,240.13,0,0,0,772.252,255.2Z" transform="translate(-169.556 -103.853)" fill="#2f2e41" />
      <path id="Path_124" data-name="Path 124" d="M621.958,156.32h0l8.99-4.224L629.7,139.127l6.011,10.733,4.3-2.019-.73-7.565,3.507,6.261,31.927-15h0a26.585,26.585,0,0,0-35.368-12.755l-4.627,2.174a26.585,26.585,0,0,0-12.755,35.368Z" transform="translate(-170.99 -106.24)" fill="#2f2e41" />
      <path id="Path_125" data-name="Path 125" d="M837.308,608.842H312.923a16.891,16.891,0,0,1-16.871-16.871V276.879a12.374,12.374,0,0,1,12.36-12.36H841.605a12.588,12.588,0,0,1,12.574,12.574V591.971A16.891,16.891,0,0,1,837.308,608.842Z" transform="translate(-178.271 -102.902)" fill="#f2f2f2" />
      <path id="Path_126" data-name="Path 126" d="M328.912,591.37H820.576a16.36,16.36,0,0,0,16.36-16.36V307.573a16.36,16.36,0,0,0-16.36-16.36H328.912a16.36,16.36,0,0,0-16.36,16.36V575.009A16.36,16.36,0,0,0,328.912,591.37Z" transform="translate(-177.899 -102.301)" fill="#fff" />
      <path id="Path_127" data-name="Path 127" d="M853.949,276.225H295.82v-8.59a16.947,16.947,0,0,1,16.933-16.922H837.017a16.947,16.947,0,0,1,16.933,16.922Z" transform="translate(-178.276 -103.213)" fill="#38ba99" />
      <circle id="Ellipse_64" data-name="Ellipse 64" cx="4.38" cy="4.38" r="4.38" transform="translate(143.937 155.902)" fill="#fff" />
      <circle id="Ellipse_65" data-name="Ellipse 65" cx="4.38" cy="4.38" r="4.38" transform="translate(160.562 155.902)" fill="#fff" />
      <circle id="Ellipse_66" data-name="Ellipse 66" cx="4.38" cy="4.38" r="4.38" transform="translate(177.187 155.902)" fill="#fff" />
      <g id="button2" transform="translate(358.504 367.675)">
        <path id="Path_128" data-name="Path 128" d="M585.156,529.435H541.188a9.725,9.725,0,0,1-9.714-9.714V475.753a9.725,9.725,0,0,1,9.714-9.714h43.968a9.725,9.725,0,0,1,9.714,9.714v43.968A9.725,9.725,0,0,1,585.156,529.435Zm-43.968-61.351a7.677,7.677,0,0,0-7.669,7.669v43.968a7.678,7.678,0,0,0,7.669,7.669h43.968a7.678,7.678,0,0,0,7.669-7.669V475.753a7.677,7.677,0,0,0-7.669-7.669Z" transform="translate(-531.474 -466.04)" fill={button2} />
        <path id="Path_129" data-name="Path 129" d="M576.127,516.9H549.542a3.071,3.071,0,0,1-3.068-3.068v-32.72a3.071,3.071,0,0,1,3.068-3.068h19.264a3.074,3.074,0,0,1,1.922.677l7.321,5.883a3.051,3.051,0,0,1,1.146,2.391v26.837a3.071,3.071,0,0,1-3.067,3.068Zm-26.585-36.811a1.024,1.024,0,0,0-1.023,1.022v32.72a1.024,1.024,0,0,0,1.023,1.022h26.585a1.024,1.024,0,0,0,1.023-1.022V486.99a1.017,1.017,0,0,0-.382-.8l-7.322-5.884a1.024,1.024,0,0,0-.64-.225Z" transform="translate(-531.137 -465.769)" fill={button2} />
        <path id="Path_130" data-name="Path 130" d="M570.857,492.085H554.5a1.023,1.023,0,1,1,0-2.045h16.36a1.023,1.023,0,1,1,0,2.045Z" transform="translate(-530.979 -465.499)" fill={button2} />
        <path id="Path_131" data-name="Path 131" d="M570.857,498.085H554.5a1.023,1.023,0,1,1,0-2.045h16.36a1.023,1.023,0,1,1,0,2.045Z" transform="translate(-530.979 -465.364)" fill={button2} />
        <path id="Path_132" data-name="Path 132" d="M570.857,504.085H554.5a1.023,1.023,0,1,1,0-2.045h16.36a1.023,1.023,0,1,1,0,2.045Z" transform="translate(-530.979 -465.229)" fill={button2} />
      </g>
      <g id="button3" transform="translate(462.8 367.675)">
        <path id="Path_133" data-name="Path 133" d="M687.156,529.435H643.188a9.725,9.725,0,0,1-9.714-9.714V475.753a9.725,9.725,0,0,1,9.714-9.714h43.968a9.725,9.725,0,0,1,9.714,9.714v43.968A9.725,9.725,0,0,1,687.156,529.435Zm-43.968-61.351a7.677,7.677,0,0,0-7.669,7.669v43.968a7.677,7.677,0,0,0,7.669,7.669h43.968a7.678,7.678,0,0,0,7.669-7.669V475.753a7.677,7.677,0,0,0-7.669-7.669Z" transform="translate(-633.474 -466.04)" fill={button3} />
        <path id="Path_134" data-name="Path 134" d="M679.172,508.535h-28.63a3.071,3.071,0,0,1-3.067-3.067v-16.36a3.071,3.071,0,0,1,3.067-3.067h28.63a3.071,3.071,0,0,1,3.068,3.068v16.36a3.071,3.071,0,0,1-3.067,3.067Zm-28.63-20.45a1.024,1.024,0,0,0-1.022,1.022v16.36a1.024,1.024,0,0,0,1.022,1.023h28.63a1.024,1.024,0,0,0,1.023-1.023v-16.36a1.023,1.023,0,0,0-1.022-1.022Z" transform="translate(-633.159 -465.589)" fill={button3} />
        <path id="Path_135" data-name="Path 135" d="M664.857,499.94a3.07,3.07,0,0,1-1.625-.463l-15.277-9.548a1.023,1.023,0,1,1,1.084-1.734l15.277,9.547a1.028,1.028,0,0,0,1.083,0l15.276-9.547a1.023,1.023,0,1,1,1.084,1.734l-15.276,9.548A3.071,3.071,0,0,1,664.857,499.94Z" transform="translate(-633.159 -465.544)" fill={button3} />
      </g>
      <g id="button1" transform="translate(254.207 367.675)">
        <path id="Path_136" data-name="Path 136" d="M483.156,529.435H439.188a9.725,9.725,0,0,1-9.714-9.714V475.753a9.725,9.725,0,0,1,9.714-9.714h43.968a9.725,9.725,0,0,1,9.714,9.714v43.968A9.725,9.725,0,0,1,483.156,529.435Zm-43.968-61.351a7.677,7.677,0,0,0-7.669,7.669v43.968a7.677,7.677,0,0,0,7.669,7.669h43.968a7.678,7.678,0,0,0,7.669-7.669V475.753a7.677,7.677,0,0,0-7.669-7.669Z" transform="translate(-429.474 -466.04)" fill={button1} />
        <path id="Path_137" data-name="Path 137" d="M475.172,508.535h-28.63a3.071,3.071,0,0,1-3.068-3.067v-16.36a3.071,3.071,0,0,1,3.068-3.067h28.63a3.071,3.071,0,0,1,3.068,3.068v16.36A3.071,3.071,0,0,1,475.172,508.535Zm-28.63-20.45a1.024,1.024,0,0,0-1.023,1.022v16.36a1.024,1.024,0,0,0,1.023,1.023h28.63a1.024,1.024,0,0,0,1.023-1.023v-16.36a1.024,1.024,0,0,0-1.023-1.022Z" transform="translate(-429.159 -465.589)" fill={button1} />
        <path id="Path_138" data-name="Path 138" d="M470.534,508.366H449.957a2.045,2.045,0,0,1-1.771-3.068l6.2-10.736a2.045,2.045,0,0,1,3.542,0l4,6.934,2.319-4.017a2.045,2.045,0,0,1,3.542,0l4.514,7.82a2.045,2.045,0,0,1-1.771,3.068Zm0-2.045h0l-4.514-7.82-3.2,5.551a1.023,1.023,0,0,1-.886.511h0a1.023,1.023,0,0,1-.886-.511l-4.888-8.468-6.2,10.736Z" transform="translate(-429.059 -465.42)" fill={button1} />
        <circle id="Ellipse_67" data-name="Ellipse 67" cx="2.045" cy="2.045" r="2.045" transform="translate(40.9 24.54)" fill={button1} />
      </g>
      <path id="Path_139" data-name="Path 139" d="M769.232,649.215H756.7l-5.963-48.353h18.5Z" transform="translate(16.902 13.528)" fill="#ffb8b8" />
      <path id="Path_140" data-name="Path 140" d="M953.705,766.852H913.285v-.511a15.733,15.733,0,0,1,15.733-15.733h24.688Z" transform="translate(-164.374 -91.958)" fill="#2f2e41" />
      <path id="Path_141" data-name="Path 141" d="M819.232,649.215H806.7l-5.963-48.353h18.5Z" transform="translate(18.028 13.528)" fill="#ffb8b8" />
      <path id="Path_142" data-name="Path 142" d="M1003.706,766.852H963.285v-.511a15.733,15.733,0,0,1,15.733-15.733h24.688Z" transform="translate(-163.249 -91.958)" fill="#2f2e41" />
      <path id="Path_143" data-name="Path 143" d="M997.528,738.2l-11.61-3.532a4.6,4.6,0,0,1-3.237-3.919L971.857,628.167a.49.49,0,0,0-.489-.457.48.48,0,0,0-.522.418l-18.13,99.388a4.6,4.6,0,0,1-5.455,3.681l-14.838-3.057a4.618,4.618,0,0,1-3.662-4.818l11.028-162.9,74.785-8.069L1003.46,734.081a4.6,4.6,0,0,1-5.932,4.122Z" transform="translate(-164.026 -96.422)" fill="#2f2e41" />
      <circle id="Ellipse_68" data-name="Ellipse 68" cx="25.114" cy="25.114" r="25.114" transform="translate(808.317 271.913)" fill="#ffb8b8" />
      <path id="Path_144" data-name="Path 144" d="M939.433,564.147l16.215-102.1a38.71,38.71,0,0,1,49.086-31.084h0a38.593,38.593,0,0,1,27.2,44.236l-16.965,91.179Z" transform="translate(-163.786 -99.189)" fill="#38ba99" />
      <path id="Path_145" data-name="Path 145" d="M1003.079,580.106a10.282,10.282,0,0,0,1.786-15.665l16.766-32.466-18.881,2.015-13.026,30.521a10.338,10.338,0,0,0,13.355,15.595Z" transform="translate(-162.715 -96.88)" fill="#ffb8b8" />
      <path id="Path_146" data-name="Path 146" d="M1006.464,560.669a4.607,4.607,0,0,1-2.481-1.177l-6.415-5.927a4.616,4.616,0,0,1-1.116-5.168l12.82-30.387-1.818-60.042a14.823,14.823,0,0,1,29.374,4.007l3.109,37.743a47.418,47.418,0,0,1-9.139,32.1l-19.992,27.027a4.605,4.605,0,0,1-3.267,1.844A4.555,4.555,0,0,1,1006.464,560.669Z" transform="translate(-162.51 -98.835)" fill="#38ba99" />
      <path id="Path_147" data-name="Path 147" d="M854.509,383.836a10.282,10.282,0,0,0,13.729,7.753l23.36,28.1,5.506-18.172-23.027-23.9a10.338,10.338,0,0,0-19.568,6.218Z" transform="translate(-165.702 -100.492)" fill="#ffb8b8" />
      <path id="Path_148" data-name="Path 148" d="M872.415,395.084a4.61,4.61,0,0,1,2.051-1.826l7.959-3.6a4.616,4.616,0,0,1,5.194.987L910.6,414.3l56,21.735a14.823,14.823,0,0,1-15.142,25.487l-35.969-11.853a47.417,47.417,0,0,1-26-20.933L872.4,399.791a4.606,4.606,0,0,1-.424-3.728,4.555,4.555,0,0,1,.441-.979Z" transform="translate(-165.309 -100.094)" fill="#38ba99" />
      <path id="Path_149" data-name="Path 149" d="M835.439,375.652l-1.023,32.72L815.58,441.1l15.728-36.476Z" transform="translate(18.362 8.457)" opacity="0.1" />
      <path id="Path_150" data-name="Path 150" d="M993.784,402.352a6.567,6.567,0,0,1-7.189-4.808,9.984,9.984,0,0,0-7.107-7.437c-4.607-1.053-10.237,1.116-13.613-2.375a6.786,6.786,0,0,1-1.611-5.974c.622-3.392,3.048-5.954,5.688-8a34.829,34.829,0,0,1,19.291-7.21,69.212,69.212,0,0,1,10.86.54,48.065,48.065,0,0,1,11.108,2.03,26.152,26.152,0,0,1,16.362,19.1,30.194,30.194,0,0,1-6.193,24.674,32.419,32.419,0,0,1-12.434,9.467,4.851,4.851,0,0,1-3.687.187c-3.024-1.2-2.53-4.948-1.151-7.446,1.475-2.674,3.746-5.262,2.559-8.516a6.446,6.446,0,0,0-3.2-3.442c-3.006-1.533-6.368-1.17-9.6-.8Z" transform="translate(-163.23 -100.606)" fill="#2f2e41" />
      <path id="Path_151" data-name="Path 151" d="M853.513,417.639H542.669A16.89,16.89,0,0,1,525.8,400.768V334.3a16.891,16.891,0,0,1,16.872-16.872H853.513A16.891,16.891,0,0,1,870.385,334.3v66.463A16.891,16.891,0,0,1,853.513,417.639Z" transform="translate(-173.098 -101.711)" fill="#fff" />
      <g id="button5" transform="translate(352.188 215.211)">
        <path id="Path_152" data-name="Path 152" d="M853.524,418.162H542.68A17.4,17.4,0,0,1,525.3,400.779V334.316a17.4,17.4,0,0,1,17.383-17.383H853.524a17.4,17.4,0,0,1,17.383,17.383v66.463a17.4,17.4,0,0,1-17.383,17.383ZM542.68,318.978a15.355,15.355,0,0,0-15.338,15.338v66.463a15.355,15.355,0,0,0,15.338,15.338H853.524a15.355,15.355,0,0,0,15.338-15.338V334.316a15.355,15.355,0,0,0-15.338-15.338Z" transform="translate(-525.297 -316.933)" fill="#3f3d56" />
        <path id="Path_153" data-name="Path 153" d="M814.847,400.942H579.669A16.891,16.891,0,0,1,562.8,384.07V349.3a16.891,16.891,0,0,1,16.872-16.872H814.847A16.89,16.89,0,0,1,831.718,349.3V384.07A16.891,16.891,0,0,1,814.847,400.942Z" transform="translate(-524.453 -316.584)" fill="#f2f2f2" />
        <circle id="Ellipse_69" data-name="Ellipse 69" cx="20.177" cy="20.177" r="20.177" transform="translate(85.649 25.266)" fill="#ff6584" />
        <path id="Path_154" data-name="Path 154" d="M799.547,398.626l-28.48-23.886L743.08,351.267a4.091,4.091,0,0,0-5.269.01l-27.9,23.581-6.814,5.76L692.825,372,661.6,345.814a4.09,4.09,0,0,0-5.268.01l-31.123,26.308L593.6,398.853a1.023,1.023,0,0,0,.662,1.8l64.814-.125,20.516-.04-.2.17,61.154-.118,58.352-.112a1.022,1.022,0,0,0,.655-1.806Z" transform="translate(-523.768 -316.304)" fill="#3f3d56" />
      </g>
      <path id="Path_155" data-name="Path 155" d="M1060.481,767.978H864.158a1.023,1.023,0,0,1,0-2.045h196.323a1.023,1.023,0,0,1,0,2.045Z" transform="translate(-165.504 -91.613)" fill="#ccc" />
      <path id="Path_156" data-name="Path 156" d="M787.186,240.088a11.473,11.473,0,0,0-7.413-5.215,10.532,10.532,0,0,0-1.7-.215L700.17,165a9.218,9.218,0,0,0-5.757-2.751,7.837,7.837,0,0,0-1.3-.041,9.259,9.259,0,0,0-6.094,15.828l29.827,26,48.979,42.69a12.18,12.18,0,0,0,.358,2.382,11.52,11.52,0,0,0,9.888,8.558,11.341,11.341,0,0,0,6.186-1.022,11.665,11.665,0,0,0,3.967-3.037c.112-.133.215-.256.317-.4a11.547,11.547,0,0,0,.644-13.129Z" transform="translate(-169.53 -105.205)" fill="#ffb8b8" />
      <path id="Path_157" data-name="Path 157" d="M655.064,306.51,654.338,277l-.614-24.489-.419-17.137-.828-33.406a9.249,9.249,0,0,0-16.064-5.368,7.1,7.1,0,0,0-.767.982,9.138,9.138,0,0,0-1.6,6.186l1.821,48.743.91,24.489,1.165,31.238a12.318,12.318,0,0,0-.91,1.442,11.562,11.562,0,1,0,18.027-3.17Z" transform="translate(-170.662 -104.499)" fill="#ffb8b8" />
      <path id="Path_158" data-name="Path 158" d="M725.188,223.64l-7.23-19.581-11.7-31.718a16.366,16.366,0,0,0-10.174-9.9c-.184-.061-.378-.123-.562-.174a16.344,16.344,0,0,0-13.538,1.861l-39.4,24.99a16.455,16.455,0,0,0-5.389,22.24,282.6,282.6,0,0,0,16.084,24.735c4.591,6.247,13.139,6.912,14.622,17.137h29.049l29.408-26.4Z" transform="translate(-170.641 -105.22)" fill="#ccc" />
      <circle id="Ellipse_70" data-name="Ellipse 70" cx="23.693" cy="23.693" r="23.693" transform="translate(79.749 310.344)" fill="#a0616a" />
      <path id="Path_159" data-name="Path 159" d="M340.207,417.243q.35.279.679.591a10.614,10.614,0,0,1-.426,15.832,9.932,9.932,0,0,1-.832.627l1.6,54.137a8.243,8.243,0,0,1-5.67,8.044l-.1.021-43.957,4.681a9.1,9.1,0,1,1-1.761-18.112l31.334-2.759,5.419-46.883a10.1,10.1,0,0,1-.993-1.012,10.614,10.614,0,0,1,14.7-15.167Z" transform="translate(-178.598 -99.515)" fill="#a0616a" />
      <path id="Path_160" data-name="Path 160" d="M139.328,650.178h11.827l5.626-45.617H139.326Z" transform="translate(3.137 13.611)" fill="#a0616a" />
      <path id="Path_161" data-name="Path 161" d="M317.242,751.858h23.292A14.842,14.842,0,0,1,355.377,766.7v.482H317.243Z" transform="translate(-177.794 -91.93)" fill="#2f2e41" />
      <path id="Path_162" data-name="Path 162" d="M24.366,634.045l10.162,6.05L62.7,603.779l-15-8.93Z" transform="translate(0.549 13.393)" fill="#a0616a" />
      <path id="Path_163" data-name="Path 163" d="M204.8,734.889,224.812,746.8h0a14.842,14.842,0,0,1,5.159,20.347l-.247.414L196.96,748.057Z" transform="translate(-180.502 -92.312)" fill="#2f2e41" />
      <path id="Path_164" data-name="Path 164" d="M337.251,744.666H324.008a4.333,4.333,0,0,1-4.317-3.882l-13.351-125.5a1.447,1.447,0,0,0-2.758-.443L279.5,668.174l-42.642,69.534a4.361,4.361,0,0,1-5.449,1.7l-17.035-7.495a4.342,4.342,0,0,1-1.978-6.2l39.2-65.637,12.022-55.3c-3.781-23.983,12.429-59.639,12.593-60l.08-.174,44.651-17.452.224.274C338.771,585.212,349.5,647.4,341.578,740.689A4.371,4.371,0,0,1,337.251,744.666Z" transform="translate(-180.168 -96.989)" fill="#2f2e41" />
      <path id="Path_165" data-name="Path 165" d="M273.54,551.865l-.208-.437c-.1-.209-10.028-21.149-17.681-43.53a33.013,33.013,0,0,1,2.289-26.456,33.373,33.373,0,0,1,21.281-16.365h0A33.412,33.412,0,0,1,318,485.088c6.071,15.181,4.136,31.385,2.315,44.129l-.036.255-.232.111Z" transform="translate(-179.22 -98.407)" fill="#3f3d56" />
      <path id="Path_166" data-name="Path 166" d="M310.952,420.493H273.33v-16.4c8.258-3.281,16.338-6.071,21.223,0a16.4,16.4,0,0,1,16.4,16.4Z" transform="translate(-178.782 -99.84)" fill="#2f2e41" />
      <path id="Path_167" data-name="Path 167" d="M271.927,401.185c-22.491,0-28.787,28.192-28.787,44.1,0,8.87,4.011,12.042,10.315,13.116l2.226-11.872,5.214,12.383c1.771.009,3.631-.025,5.559-.061l1.768-3.64,3.942,3.575c15.789.024,28.549,2.325,28.549-13.5C300.713,429.377,295.192,401.185,271.927,401.185Z" transform="translate(-179.462 -99.825)" fill="#2f2e41" />
      <path id="Path_168" data-name="Path 168" d="M378.209,767.978H181.887a1.023,1.023,0,1,1,0-2.045H378.209a1.023,1.023,0,1,1,0,2.045Z" transform="translate(-180.864 -91.613)" fill="#ccc" />
      <path id="Path_169" data-name="Path 169" d="M378.656,440.329H334.688a9.725,9.725,0,0,1-9.714-9.714V386.647a9.725,9.725,0,0,1,9.714-9.714h43.968a9.725,9.725,0,0,1,9.714,9.714v43.968a9.725,9.725,0,0,1-9.714,9.714Z" transform="translate(-177.62 -100.371)" fill="#fff" />
      <g className="translate-x-20" id="button4" transform="translate(147.355 276.562)">
        <path id="Path_170" data-name="Path 170" d="M378.656,440.329H334.688a9.725,9.725,0,0,1-9.714-9.714V386.647a9.725,9.725,0,0,1,9.714-9.714h43.968a9.725,9.725,0,0,1,9.714,9.714v43.968a9.725,9.725,0,0,1-9.714,9.714Zm-43.968-61.351a7.677,7.677,0,0,0-7.669,7.669v43.968a7.677,7.677,0,0,0,7.669,7.669h43.968a7.677,7.677,0,0,0,7.669-7.669V386.647a7.677,7.677,0,0,0-7.669-7.669Z" transform="translate(-324.974 -376.933)" fill="#3f3d56" />
        <path id="Path_171" data-name="Path 171" d="M370.672,422.041h-28.63a3.071,3.071,0,0,1-3.067-3.068V397.5a3.071,3.071,0,0,1,3.067-3.068h8.06a3.048,3.048,0,0,1,2.613,1.459l2.248,3.653h15.71a3.071,3.071,0,0,1,3.068,3.068v16.36a3.071,3.071,0,0,1-3.068,3.068Z" transform="translate(-324.659 -376.539)" fill="#38ba99" />
      </g>
      <path id="Path_172" data-name="Path 172" d="M370.91,432.164q.215.393.4.808A10.614,10.614,0,0,1,364.77,447.4a9.934,9.934,0,0,1-1.01.255L344.23,498.17a8.243,8.243,0,0,1-8.347,5.214l-.1-.018-42.329-12.743a9.1,9.1,0,1,1,5.405-17.376l29.95,9.616L352,441.756a10.1,10.1,0,0,1-.523-1.319,10.614,10.614,0,0,1,19.435-8.273Z" transform="translate(-178.473 -99.251)" fill="#a0616a" />
    </g>
  </svg>
