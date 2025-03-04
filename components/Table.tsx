import React,{ useEffect } from 'react'

function Table( { Header, children, columns }: any) {

  const loadGrid:any = () => `grid-cols-${columns}` 
  useEffect(() => {
    loadGrid()
  }, [columns]);

  return (
    <table className="w-full border-collapse grid border-spacing-4">
        <tr className={`grid md:${loadGrid() || 'grid-cols-1'} bg-[#f8f9fa] font-medium text-gray-600/90 text-sm tracking-wide rounded-lg mb-4 px-2 py-1`}>
            <Header />
        </tr>
        <tr className={`grid md:${loadGrid() || 'grid-cols-1'} text-gray-900 text-[0.81rem] font-normal font-circular rounded-md px-2 py-1`}>
          { children }
        </tr>
    </table>
  )
}

export default Table