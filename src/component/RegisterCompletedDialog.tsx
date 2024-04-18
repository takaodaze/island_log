import { Button, Dialog, Text, YStack } from "tamagui";

export const RegisterCompletedDialog = ({
  isOpen,
  onClose,
  backToSearchResult,
  toHome,
}: {
  isOpen: boolean;
  onClose: () => void;
  toHome: () => void;
  backToSearchResult: () => void;
}) => {
  return (
    <Dialog open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay key="overlay" />
        <Dialog.Content key="content">
          <Dialog.Title>
            <Text>登録が完了しました</Text>
          </Dialog.Title>
          <YStack gap={12} marginTop={32}>
            <Button
              onPress={() => {
                onClose();
                toHome();
              }}
            >
              <Text>ホームへ</Text>
            </Button>
            <Button
              onPress={() => {
                onClose();
                backToSearchResult();
              }}
            >
              <Text>検索結果に戻る</Text>
            </Button>
          </YStack>
          <Dialog.Close onPress={onClose} marginTop={12}>
            <Text>閉じる</Text>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};
