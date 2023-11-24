export function convertIsoDuration(isoDuration: string): string {
    const match = isoDuration.match(/PT(\d+)H(\d+)M/);

    if (match) {
        const hours: number = parseInt(match[1]);
        const minutes: number = parseInt(match[2]);

        // Format the result as "hours:minutes"
        const result: string = `${hours}:${minutes.toString().padStart(2, '0')}`;
        return result;
    } else {
        return 'Invalid ISO duration format';
    }
}

export function convertIsoDurationToArabic(isoDuration: string): string {
    const match = isoDuration.match(/PT(\d+)H(\d+)M/);

    if (match) {
        const hours: number = parseInt(match[1]);
        const minutes: number = parseInt(match[2]);

        // Format the result in Arabic
        const result: string = `${hours}س و ${minutes}د`;
        return result;
    } else {
        return 'Invalid ISO duration format';
    }
}

import { Dispatch, SetStateAction } from "react"
import { ID } from "../pages/flights/core/QueryListViewProvider";




function calculatedGroupingIsDisabled<T>(isLoading: boolean, data: Array<T> | undefined): boolean {
    if (isLoading) {
      return true
    }
  
    return !data || !data.length
  }
  
  function calculateIsAllDataSelected<T>(data: Array<T> | undefined, selected: Array<ID>): boolean {
    if (!data) {
      return false
    }
  
    return data.length > 0 && data.length === selected.length
  }
  
  function groupingOnSelect(
    id: string,
    selected: Array<string>,
    setSelected: Dispatch<SetStateAction<Array<string>>>
  ) {
    if (!id) {
      return
    }
    
    if (selected.includes(id)) {
      if(selected.filter((itemId) => itemId !== id).length==0) return 
      setSelected(selected.filter((itemId) => itemId !== id))
    } else {
      const updatedSelected = [...selected]
      updatedSelected.push(id)
      setSelected(updatedSelected)
    }
  }
  
  function groupingOnSelectAll<T>(
    isAllSelected: boolean,
    setSelected: Dispatch<SetStateAction<Array<ID>>>,
    data?: Array<T & { id?: ID }>
  ) {
    if (isAllSelected) {
      setSelected([])
      return
    }
  
    if (!data || !data.length) {
      return
    }
  
    setSelected(data.filter((item) => item.id).map((item) => item.id))
  }

  export {

    calculatedGroupingIsDisabled,
    calculateIsAllDataSelected,
    groupingOnSelect,
    groupingOnSelectAll,
    
 
  }
  