export interface ISentenceItemProps {
  imgPath?: string;
  header?: string;
  footer?: string;
  text?: string;
  onPrevious?: () => void;
  onNext?: () => void;
}
