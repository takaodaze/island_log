import { Dialog, Text } from "tamagui";

export const FavoriteCompletedDialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay key="overay_favorite_completed" />
        <Dialog.Content key="content_favorite_content" bordered>
          <Dialog.Title>
            <Text fontSize={"$8"}>お気に入りに登録しました</Text>
          </Dialog.Title>
          <Dialog.Description />
          <Dialog.Close onPress={onClose}>
            <Text>閉じる</Text>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};
