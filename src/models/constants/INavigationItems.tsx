import React, {type ReactNode} from 'react'

export interface INavigationItem {
  name: string;
  url: string;
  icon: ReactNode;
}

export interface INavigationGroup{
  name: string;
  icon?: ReactNode;
  items?: INavigationItem[]
}
