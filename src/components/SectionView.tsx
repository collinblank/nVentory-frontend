import React from "react";
import logoSrc from "../assets/nVentory_logo.svg";
import SectionBox from "./SectionBox"

function SectionView() {

	return (
		<>	
			{/* section props sent to SectionBox get drilled to sub components */}
            <SectionBox />
        </>
	)
}

export default SectionView